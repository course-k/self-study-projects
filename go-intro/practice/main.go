package main

import (
	"fmt"
)

func main() {
	var name string = "Taro"
	var (
		num     int     = 20
		ratio   float64 = 2.8
		isValid bool    = true
	)
	person := "kevin"
	age := 38
	score := 3.9
	isError := false
	fmt.Println(name, num, ratio, isValid)
	fmt.Printf("%T", person)
	fmt.Printf("%T", age)
	fmt.Printf("%T", score)
	fmt.Printf("%T", isError)
}
