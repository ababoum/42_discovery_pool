#!/bin/bash

min=$(( 3 < $# ? 3 : $# ))
if [ $# -eq 0 ]
then
    echo "No arguments supplied"
else
    for i in $(seq 1 $min)
    do
        echo $1
		shift
    done
fi