package simple

import (
	"log"
	"os"
	"strings"
	"sync"
)

func Example() {
	document := []string{"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout", " The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English", " Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy", " Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"}

	cmd := "simple"

	if len(os.Args) > 1 {
		cmd = os.Args[1]
	}

	if cmd == "simple" {
		process_simple(document)
	} else if cmd == "mutex" {
		process_routine_mutex(document)
	} else if cmd == "channel" {
		// process_routine_channel(document)
	} else {
		log.Fatal("unknown command: ", cmd)
	}

}

// count each word frequency and
// print the works having more than 1 occurrence
func process_simple(document []string) {
	resultMap := make(map[string]int)
	for _, line := range document {
		words := strings.Split(line, " ")
		for _, word := range words {
			word = strings.TrimSpace(word)
			if len(word) <= 0 {
				continue
			}

			word = strings.ToLower(word)
			word = strings.TrimSuffix(word, ".")

			resultMap[word]++
		}
	}

	print(resultMap)
}

func print(result map[string]int) {
	for w, c := range result {
		if c > 1 {
			println(w, c)
		}
	}
}

// count each word frequency using go routine
// print the works having more than 1 occurrence
func process_routine_mutex(document []string) {
	resultMap := make(map[string]int)

	var wg sync.WaitGroup

	for _, line := range document {
		wg.Add(1)

		go func() {
			processLine(line, resultMap)
			wg.Done()
		}()
	}

	wg.Wait()
	print(resultMap)
}

var mu sync.Mutex

func processLine(line string, result map[string]int) {
	words := strings.Split(line, " ")
	for _, word := range words {
		word = strings.TrimSpace(word)
		if len(word) <= 0 {
			continue
		}
		word = strings.ToLower(word)
		word = strings.TrimSuffix(word, ".")

		mu.Lock()
		result[word]++
		mu.Unlock()
	}
}
