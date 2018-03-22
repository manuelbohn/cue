
library(rjson)
library(tidyr)
library(stringr)
library(dplyr)
library(data.table)


##
setwd("~/Work/CueStrength/git/stats/")


################################################################################################################


# select all files from individual workers
# files <- dir("~/Work/CueStrength/cosub_between_look/anonymized-results/")
# files <- dir("~/Work/CueStrength/cosub_between_lookLabel/anonymized-results/")
# files <- dir("~/Work/CueStrength/cosub_between_point/anonymized-results/")
 files <- dir("~/Work/CueStrength/cosub_between_pointLabel/anonymized-results/")

#combine files into one dataframe
raw <- data.frame()
for (f in files) {
#  jf <- paste("~/Work/CueStrength/cosub_between_look/anonymized-results/",f,sep="")
#  jf <- paste("~/Work/CueStrength/cosub_between_lookLabel/anonymized-results/",f,sep="")
#  jf <- paste("~/Work/CueStrength/cosub_between_point/anonymized-results/",f,sep="")
  jf <- paste("~/Work/CueStrength/cosub_between_pointLabel/anonymized-results/",f,sep="")
  jd <- fromJSON(paste(readLines(jf), collapse=""))
  id <- data.frame(workerid = jd$WorkerId, 
                   data = jd$answers$data$data
)
  raw <- bind_rows(raw, id)
}

# convert into short format, drop unnecessary columns, rename variables and sort by id
inf.data= melt(setDT(raw), measure = patterns( "^data.experiment","^data.cond","^data.agent","^data.leftFruit","^data.rightFruit","^data.tablePositionCorr","^data.pick","^data.inf","^data.trial","^data.rt", "^data.correct"))
names(inf.data) = c("id","alltrial","experiment","condition","agent","leftObject","rightObject","targetOnTable","pick","target","trial","rt","correct") 
# remove file path for picked object
inf.data $pick= str_sub(inf.data $pick,61,str_length(inf.data $pick)-4)
#
inf.data = inf.data[!duplicated(inf.data), ]
inf.data = inf.data[order(id)]
inf.data $id = paste(inf.data $id, inf.data $condition,sep="_")
inf.data$trial[inf.data$trial=="train1"]="train"
inf.data$trial[inf.data$trial=="train2"]="train"
# check resulting datafile
str(inf.data)
head(inf.data)
# write csv file for further analysis
# write.csv(inf.data, file="cue.btw.look.data.csv")
# write.csv(inf.data, file="cue.btw.lookLabel.data.csv")
# write.csv(inf.data, file="cue.btw.point.data.csv")
 write.csv(inf.data, file="cue.btw.pointLabel.data.csv")

################################################################################################################

