package main

import (
	"encoding/json"
	"net/http"
)

func (app *application) Home(w http.ResponseWriter, r *http.Request) {
	var payload = struct {
		Status  string `json:"status"`
		Message string `json:"message"`
		Version string `json:"version"`
	}{
		Status:  "active",
		Message: "sss",
		Version: "10",
	}

	out, err := json.Marshal(payload)
}
