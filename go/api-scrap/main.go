package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"
)

type WeatherResponse struct {
	Coord struct {
		Lon float64 `json:"lon"`
		Lat float64 `json:"lat"`
	} `json:"coord"`
	Weather []struct {
		ID          int    `json:"id"`
		Main        string `json:"main"`
		Description string `json:"description"`
		Icon        string `json:"icon"`
	} `json:"weather"`
	Base string `json:"base"`
	Main struct {
		Temp      float64 `json:"temp"`
		FeelsLike float64 `json:"feels_like"`
		TempMin   float64 `json:"temp_min"`
		TempMax   float64 `json:"temp_max"`
		Pressure  int     `json:"pressure"`
		Humidity  int     `json:"humidity"`
		SeaLevel  int     `json:"sea_level"`
		GrndLevel int     `json:"grnd_level"`
	} `json:"main"`
	Visibility int `json:"visibility"`
	Wind       struct {
		Speed float64 `json:"speed"`
		Deg   int     `json:"deg"`
	} `json:"wind"`
	Clouds struct {
		All int `json:"all"`
	} `json:"clouds"`
	Dt  int `json:"dt"`
	Sys struct {
		Type    int    `json:"type"`
		ID      int    `json:"id"`
		Country string `json:"country"`
		Sunrise int    `json:"sunrise"`
		Sunset  int    `json:"sunset"`
	} `json:"sys"`
	Timezone int    `json:"timezone"`
	ID       int    `json:"id"`
	Name     string `json:"name"`
	Cod      int    `json:"cod"`
}

func (wr *WeatherResponse) TempHuman() string {
	if wr == nil {
		return ""
	}

	formattedTemperature := fmt.Sprintf(
		`Temperature: %f degree celsius,
		but feels like: %f degree celsius`,
		wr.Main.Temp,
		wr.Main.FeelsLike)

	return formattedTemperature
}
func (wr *WeatherResponse) SunsetTime() time.Time {
	if wr == nil {
		return time.Time{}
	}

	return time.UnixMilli(int64(wr.Sys.Sunset))
}

func (wr *WeatherResponse) SunriseTime() time.Time {
	if wr == nil {
		return time.Time{}
	}

	return time.UnixMilli(int64(wr.Sys.Sunrise))
}

func main() {
	url := "https://datausa.io/api/data?drilldowns=Nation&measures=Population"

	resp, err := http.Get(url)
	if err != nil {
		log.Printf("error making api call: %+v", err)
		return
	}
	defer func() {
		err := resp.Body.Close()
		if err != nil {
			log.Fatalf("error closing response body: %+v", err)
			return
		}
	}()

	respJson := make(map[string]any)
	if err := json.NewDecoder(resp.Body).Decode(&respJson); err != nil {
		log.Fatalf("error parsing response body to json: %+v", err)
		return
	}

	fmt.Print(respJson)
}
