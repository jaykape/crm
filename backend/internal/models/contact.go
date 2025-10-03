package models

import "time"

type Contact struct {
	ID         int            `json:"id"`
	FirstName  string         `json:"firstname"`
	LastName   string         `json:"lastname"`
	Email      string         `json:"email"`
	Properties map[string]any `json:"properties"`
	CreatedAt  time.Time      `json:"createdat"`
}
