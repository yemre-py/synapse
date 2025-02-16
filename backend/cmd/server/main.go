package main

import (
	"log"
	"synapse/internal/infrastructure/linealg"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.Use(cors.New(cors.Config{
		AllowAllOrigins: true,
		AllowMethods:    []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:    []string{"Content-Type", "Authorization"},
	}))

	linealg.MatrixServer(router)

	log.Fatal(router.Run(":8080"))
}
