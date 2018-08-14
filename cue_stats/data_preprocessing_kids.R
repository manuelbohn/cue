
library(rjson)
library(tidyr)
library(stringr)
library(dplyr)
library(data.table)



files <- dir("~/Work/CueStrength/raw_data_kids")

raw <- data.frame()
for (f in files) {
  jf <- paste("~/Work/CueStrength/raw_data_kids/",f,sep="")
  jd <- fromJSON(paste(readLines(jf), collapse=""))
  id <- data.frame(test_date= jf, 
                   data = jd$data$data
  )
  raw <- bind_rows(raw, id)
}

# convert into short format, drop unnecessary columns, rename variables and sort by id
inf.data= melt(setDT(raw), measure = patterns( "^data.subid","^data.subage","^data.experiment","^data.trial","^data.control","^data.agent","^data.leftFruit","^data.rightFruit","^data.tablePositionCorr","^data.pick","^data.inf","^data.rt", "^data.correct"))
names(inf.data) = c("test_date","alltrial","subid","age","condition","trial","control","agent","leftObject","rightObject","targetOnTable","pick","target","rt","correct") 

inf.data <- inf.data %>%
  mutate(test_date = str_sub(test_date,42,str_length(test_date)-5),
         pick = str_sub(pick,56,str_length(pick)-4),
         trial_type = ifelse(trial == "train1" | trial == "train2", "train", "test"))

write.csv(inf.data, file="kids_cue_barrier_data.csv")



######## Pilots

files <- dir("~/Work/MCC/git-mcc/kids_info_pilot/robots_point_3_sounds")

raw <- data.frame()
for (f in files) {
  jf <- paste("~/Work/MCC/git-mcc/kids_info_pilot/robots_point_3_sounds/",f,sep="")
  jd <- fromJSON(paste(readLines(jf), collapse=""))
  id <- data.frame(test_date= jf, 
                   data = jd$data$data
  )
  raw <- bind_rows(raw, id)
}

# convert into short format, drop unnecessary columns, rename variables and sort by id
inf.data= melt(setDT(raw), measure = patterns( "^data.subid","^data.subage","^data.experiment","^data.trial","^data.cue","^data.control","^data.agent","^data.leftFruit","^data.rightFruit","^data.targetPosition","^data.pick","^data.inf","^data.rt", "^data.correct"))
names(inf.data) = c("test_date","alltrial","subid","age","condition","trial","cue","control","agent","leftObject","rightObject","targetPosition","pick","target","rt","correct") 

inf.data <- inf.data %>%
  mutate(test_date = str_sub(test_date,42,str_length(test_date)-5),
         pick = str_sub(pick,56,str_length(pick)-4),
         trial_type = ifelse(trial == "filler1" | trial == "filler2", "filler", "test"))

write.csv(inf.data, file="kids_cue_barrier_data.csv")

