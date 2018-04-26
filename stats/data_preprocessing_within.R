
library(rjson)
library(tidyr)
library(stringr)
library(dplyr)
library(data.table)
library("stringr")


##
setwd("~/Work/CueStrength/git/stats/")


################################################################################################################


# select all files from individual workers
#files <- dir("~/Work/CueStrength/cosub_within_s/anonymized-results/")
#files <- dir("~/Work/CueStrength/cosub_within_control/anonymized-results/")
#files <- dir("~/Work/CueStrength/cosub_within_control2/anonymized-results/")
#files <- dir("~/Work/CueStrength/cosub_between_control_barrier/anonymized-results/")
files <- dir("~/Work/CueStrength/cosub_between_control_later/anonymized-results/")
#files <- dir("~/Work/CueStrength/cosub_between_control_test/anonymized-results/")

#combine files into one dataframe
raw <- data.frame()
for (f in files) {
#  jf <- paste("~/Work/CueStrength/cosub_within_s/anonymized-results/",f,sep="")
#  jf <- paste("~/Work/CueStrength/cosub_within_control/anonymized-results/",f,sep="")
#  jf <- paste("~/Work/CueStrength/cosub_within_control2/anonymized-results/",f,sep="")
  jf <- paste("~/Work/CueStrength/cosub_between_control_later/anonymized-results/",f,sep="")
#  jf <- paste("~/Work/CueStrength/cosub_between_control_barrier/anonymized-results/",f,sep="")
#  jf <- paste("~/Work/CueStrength/cosub_between_control_test/anonymized-results/",f,sep="")
  
  jd <- fromJSON(paste(readLines(jf), collapse=""))
  id <- data.frame(workerid = jd$WorkerId, 
                   data = jd$answers$data$data
)
  raw <- bind_rows(raw, id)
}

# convert into short format, drop unnecessary columns, rename variables and sort by id
inf.data= melt(setDT(raw), measure = patterns( "^data.experiment","^data.cond","^data.control","^data.agent","^data.leftFruit","^data.rightFruit","^data.tablePositionCorr","^data.pick","^data.inf","^data.trial","^data.rt", "^data.correct"))
names(inf.data) = c("id","alltrial","experiment","condition","control","agent","leftObject","rightObject","targetOnTable","pick","target","trial","rt","correct") 
inf.data $pick= str_sub(inf.data $pick,60,str_length(inf.data $pick)-4)
inf.data = inf.data[!duplicated(inf.data), ]
inf.data = inf.data[order(id)]
inf.data $id = paste(inf.data $id, inf.data $experiment,sep="_")
inf.data$trial[inf.data$trial=="train1"]="train"
inf.data$trial[inf.data$trial=="train2"]="train"

# check resulting datafile
str(inf.data)
head(inf.data)
# write csv file for further analysis
#write.csv(inf.data, file="cue.data.csv")
#write.csv(inf.data, file="cue_control_2.data.csv")
write.csv(inf.data, file="cue_control_later.data.csv")
#write.csv(inf.data, file="cue_control_barrier.data.csv")
#write.csv(inf.data, file="cue_control_test.data.csv")

################################################################################################################

