package main

import (
	"net/http"

	"golang.org/x/sync/errgroup"
)

func main() {
	concurrently_api_call()
}

func concurrently_api_call() {
	urlList := []string{
		"https://google.com",
		// "https://i-dont-exitist!.com",
		"https://youtube.com",
		"https://facebook.com",
		"https://yahoo.com",
		"https://something.com",
	}

	urlChannel := make(chan string)
	respChannel := make(chan http.Response)
	var eg errgroup.Group
	// var sm syncmap.Map

	// workers
	numWorkers := 3
	for i := 0; i < numWorkers; i++ {
		eg.Go(func() error {
			return call_api(urlChannel, respChannel)
		})
	}

	var respMap []int
	go func() {
		for resp := range respChannel {
			println(resp.StatusCode)
			respMap = append(respMap, resp.StatusCode)
		}
	}()

	for _, url := range urlList {
		println("send request..", url)
		urlChannel <- url
	}
	close(urlChannel)

	println("can't close channel")

	go func() {
		eg.Wait()
		close(respChannel)
	}()

	if err := eg.Wait(); err != nil {
		panic(err)
	}

	println(respMap)
}

func call_api(urlInput chan string, respOutput chan http.Response) error {
	for url := range urlInput {
		println("calling..", url)
		resp, err := http.Get(url)
		if err != nil {
			return err
		}
		println("done...", url)
		respOutput <- *resp
		println("done sending response...")
	}

	println("i should not exits")
	return nil
}
