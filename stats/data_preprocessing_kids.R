
library(rjson)
library(tidyr)
library(stringr)
library(dplyr)
library(data.table)



setwd("~/Work/CueStrength/git/stats/")

files <- dir("~/Work/CueStrength/raw_data_kids")

raw_data <- data_frame()
for (f in files) {
  jf <- paste("~/Work/CueStrength/raw_data_kids/",f,sep="")
  jd <- fromJSON(paste(readLines(jf), collapse=""))
  id <- as_data_frame(jd$data$data)%>%
    mutate(id = jd$data$subid,
           agegroup = jd$data$subage,
           pick = str_sub(jd$data$data$pick,58,str_length(jd$data$data$pick)-4))
  raw_data <- bind_rows(raw_data, id)
}

raw_data

write.csv(raw_data, file="kids_cue_barrier_data.csv")

