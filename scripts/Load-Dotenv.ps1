function Load-Dotenv {
    param([string]$Path = ".env")
    if (-not (Test-Path -LiteralPath $Path)) { return }
    Get-Content -Path $Path | ForEach-Object {
        if ($_ -match '^\s*([^#=]+)=(.*)$') {
            $key = $matches[1].Trim()
            $val = $matches[2].Trim().Trim('"', "'")
            [Environment]::SetEnvironmentVariable($key, $val, "Process")
        }
    }
}
