<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    // Tambahkan method ini:
    protected function setUp(): void
    {
        parent::setUp();

        // 🔥 INI KUNCINYA: Mematikan Vite saat testing
        $this->withoutVite();
    }
}
