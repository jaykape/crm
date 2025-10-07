package config

import (
	"flag"
	"time"
)

type Config struct {
	DSN             string
	Port            int
	Domain          string
	ShutdownTimeout time.Duration
}

func Load() *Config {
	cfg := &Config{}

	flag.StringVar(&cfg.DSN, "dsn", "host=localhost port=5432 user=postgres password=postgres dbname=crm sslmode=disable timezone=UTC connect_timeout=5", "Postgres connection string")
	flag.IntVar(&cfg.Port, "port", 8080, "Server port")
	flag.StringVar(&cfg.Domain, "domain", "api.crm.kape.live", "Application domain")
	flag.DurationVar(&cfg.ShutdownTimeout, "shutdown-timeout", 5*time.Second, "Graceful shutdown timeout")

	flag.Parse()
	return cfg
}
