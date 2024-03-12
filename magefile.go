//go:build mage

package main

import (
	// "github.com/magefile/mage/mg"
	"github.com/magefile/mage/sh"
)

func Bootstrap() error {
	return RunSync([][]string{
		{"go", "mod", "vendor"},
		{"go", "mod", "tidy"},
		{"go", "generate", "-tags", "tools", "tools/tools.go"},
	})
}

func UpdateDeps() error {
	return RunSync([][]string{
		{"go", "get", "-u", "all"},
		{"go", "mod", "vendor"},
		{"go", "mod", "tidy"},
	})
}

func Dev() error {
	return sh.Run("wails", "dev")
}
func Start() error {
	return sh.Run("wails", "dev")
}

func Test() error {
	// Runs both Go, and frontend tests
	return RunSync([][]string{
		{"gotestsum", "--format", "pkgname", "--", "--cover", "./..."},
		{"yarn", "--cwd", "frontend", "test:coverage"},
	})
}

func Build() error {
	return sh.Run(
		"wails",
		"build",
		"-platform",
		"windows/amd64,darwin/universal,linux/amd64",
		"-ldflags",
		"-s -w",
		// "-nsis", // Builds a Windows installer
		"-upx", // Binary compression
	)
}
