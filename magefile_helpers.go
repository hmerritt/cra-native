//go:build mage
// +build mage

package main

import (
	"os"
	"os/exec"
	"sync"

	"github.com/magefile/mage/sh"
)

const (
	MODULE_NAME = "github.com/hmerritt/adrift-native" // go.mod module name
)

// ----------------------------------------------------------------------------
// Runtime helpers
// ----------------------------------------------------------------------------

// Runs multiple cmd commands one-by-one
func RunSync(commands [][]string) error {
	for _, cmd := range commands {
		if len(cmd) == 0 {
			continue
		}

		if err := sh.Run(cmd[0], cmd[1:]...); err != nil {
			return err
		}
	}

	return nil
}

// Runs multiple commands in parallel
func RunParallel(commands [][]string) error {
	var wg sync.WaitGroup
	var errCatch error = nil

	// Launch a goroutine for each command.
	for _, cmd := range commands {
		if len(cmd) == 0 {
			continue
		}

		wg.Add(1)

		go func(cmd []string) {
			defer wg.Done()
			if err := sh.Run(cmd[0], cmd[1:]...); err != nil {
				errCatch = err
			}
		}(cmd)
	}

	// Wait for all the goroutines to finish.
	wg.Wait()

	// If any of the commands failed, return the first error.
	if errCatch != nil {
		return errCatch
	}

	return nil
}

// Checks if an executable exists in PATH
func ExecExists(e string) bool {
	_, err := exec.LookPath(e)
	return err == nil
}

// Get ENV, or use fallback value
func GetEnv(key, fallback string) string {
	if value, ok := os.LookupEnv(key); ok {
		return value
	}
	return fallback
}
