package router

import (
	"net/http"

	"github.com/gin-gonic/gin"
	cors "github.com/rs/cors/wrapper/gin"
)

func Start() {
	router := gin.Default()
	router.Use(cors.New(cors.Config{
		AllowOrigins:  []string{"*"},
		AllowMethods:  []string{"PUT", "POST", "GET"},
		AllowHeaders:  []string{"*"},
		ExposeHeaders: []string{"*"},
	}))

	router.GET("/ping", func(c *gin.Context) {
		c.String(http.StatusOK, "pong")
		//c.JSON(200, gin.H{
		//	"message": "pong",
		//})
	})

	router.POST("/addimage", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "upload complete",
		})
	})

	r.Run(":8080") // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
