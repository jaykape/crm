package routes

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/jaykape/crm/backend/internal/app"
	userhandlers "github.com/jaykape/crm/backend/internal/handlers/user_handlers"
	custommiddleware "github.com/jaykape/crm/backend/internal/middleware"
)

func Routes(app *app.Application) http.Handler {
	mux := chi.NewRouter()

	mux.Use(middleware.Recoverer)
	mux.Use(custommiddleware.EnableCORS)

	mux.Get("/register", userhandlers.RegisterHandler(app))

	return mux
}
