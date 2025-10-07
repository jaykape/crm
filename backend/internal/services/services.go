package services

import userservice "github.com/jaykape/crm/backend/internal/services/user_service"

type Services struct {
	User *userservice.UserService
}
