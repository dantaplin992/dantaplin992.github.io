package main

import (
	"fmt"
	"syscall/js"
)

func clicked(this js.Value, p []js.Value) interface{} {
	js.Global().
		Get("document").
		Call("getElementById", "title").
		Set("innerText", "Clicked!")

	return nil
}

func main() {
	c := make(chan struct{}, 0)
	js.Global().Set("clicked", js.FuncOf(clicked))
	fmt.Println("Hello, World!")
	<-c
}
