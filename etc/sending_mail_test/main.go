package main

import (
	"fmt"
	"log"
	"net/smtp"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	// Load .env file
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	smtpHost := os.Getenv("SMTP_HOST")
	smtpPort := os.Getenv("SMTP_PORT")
	username := os.Getenv("SMTP_USERNAME")
	password := os.Getenv("SMTP_PASSWORD")

	to := []string{"natthajakntk@gmail.com"}
	message := []byte("From: Kape <noreply@kape.live>\r\n" +
		"To: newuser@example.com\r\n" +
		"Subject: Welcome!\r\n\r\n" +
		"Hi there,\nThanks for registering!\n")

	auth := smtp.PlainAuth("", username, password, smtpHost)

	err = smtp.SendMail(smtpHost+":"+smtpPort, auth, username, to, message)
	if err != nil {
		fmt.Println("Error sending email:", err)
		return
	}

	fmt.Println("Email sent successfully!")
}
