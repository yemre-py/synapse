package handler

import (
	"net/http"
	"synapse/internal/math/linealg/matrix/usecase"
	"synapse/internal/math/linealg/matrix/usecase/dto"

	"github.com/gin-gonic/gin"
)

type MatrixHandler struct {
	matrixUsecase usecase.MatrixUsecase
}

func NewMatrixHandler(matrixUsecase usecase.MatrixUsecase) *MatrixHandler {
	return &MatrixHandler{matrixUsecase: matrixUsecase}
}

func (h *MatrixHandler) DeterminantGauss(c *gin.Context) {
	var req dto.MatrixDto
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	det, err := h.matrixUsecase.DeterminantGauss(&req)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"determinant": det,
	})
}
