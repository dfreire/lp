package main

import (
	"github.com/labstack/echo"
)

func main() {
	urls := []string{
		"/home",
		"/biografia",
		"/projetos",
		"/textos",
		"/edicoes",
		"/colecoes",
		"/video",
		"/contactos",
	}

	e := echo.New()
	e.Static("/", "public")
	for _, url := range urls {
		e.ServeFile(url, "public/index.html")
	}
	e.Run(":3000")
}
