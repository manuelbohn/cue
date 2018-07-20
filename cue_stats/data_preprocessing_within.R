
library(rjson)
library(tidyr)
library(stringr)
library(dplyr)
library(data.table)
library(digest)

remove.packages("htmltools")
remove.packages("shiny")

##
setwd("~/Work/CueStrength/git/stats/")


################################################################################################################


# select all files from individual workers

files <- dir("~/Work/CueStrength/cosub_between_pointLabel/production-results/")

#combine files into one dataframe
raw <- data.frame()
for (f in files) {
  jf <- paste("~/Work/CueStrength/cosub_between_pointLabel/production-results/",f,sep="")
  
  jd <- fromJSON(paste(readLines(jf), collapse=""))
  id <- data.frame(workerid = digest(paste0("A1XUBU5CS5SFRV", jd$WorkerId), algo = 'md5'), 
                   data = jd$answers$data$data
)
  raw <- bind_rows(raw, id)
}


# convert into short format, drop unnecessary columns, rename variables and sort by id
inf.data= melt(setDT(raw), measure = patterns( "^data.experiment","^data.cond","^data.agent","^data.leftFruit","^data.rightFruit","^data.tablePositionCorr","^data.pick","^data.inf","^data.trial","^data.rt", "^data.correct"))
names(inf.data) = c("id","alltrial","experiment","condition","agent","leftObject","rightObject","targetOnTable","pick","target","trial","rt","correct") 
inf.data $pick= str_sub(inf.data $pick,61,str_length(inf.data $pick)-4)
inf.data = inf.data[!duplicated(inf.data), ]
inf.data = inf.data[order(id)]
#inf.data $id = paste(inf.data $id, inf.data $experiment,sep="_")
inf.data$trial[inf.data$trial=="train1"]="train"
inf.data$trial[inf.data$trial=="train2"]="train"

# check resulting datafile
str(inf.data)
head(inf.data)

# write csv file for further analysis

write.csv(inf.data, file="cue.btw.pointLabel.data.csv")


################################################################################################################

