package main

import (
	"fmt"
)

func f(parms ...int) {
	fmt.Println(parms)
}
func main() {
	a := []int{1, 3, 5}
	f(a...)
}
