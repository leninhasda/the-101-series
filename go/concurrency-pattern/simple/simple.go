package simple

import "strings"

func Example() {
	document := []string{"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout", " The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English", " Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy", " Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"}

	process(document)
}

// count each word frequency and
// print the works having more than 1 occurrence
func process(document []string) {
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
