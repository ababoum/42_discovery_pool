#!/bin/bash

if [ $# -eq 0 ]
then
    echo "No arguments supplied"
else
    for i in $(seq 1 $#)
    do
        mkdir -p "ex"$1
		shift
    done
fi