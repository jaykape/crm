package main

import (
	"fmt"
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

	_ = app.writeJSON(w, http.StatusOK, payload)
}

func (app *application) AllContacts(w http.ResponseWriter, r *http.Request) {
	contacts, err := app.DB.AllContacts()
	if err != nil {
		fmt.Println(err)
		return
	}

	_ = app.writeJSON(w, http.StatusOK, contacts)

}
