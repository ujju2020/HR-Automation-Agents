$pp = New-Object -ComObject PowerPoint.Application
$inputPath = "C:\Users\Administration\Downloads\BPF2026_IdeaSubmission_PitchDeck_PulseHR.pptx"
$outputPath = "C:\Users\Administration\Downloads\BPF2026_IdeaSubmission_PitchDeck_PulseHR.pdf"
$outputPathLocal = "c:\Users\Administration\Desktop\VibeCoding\BITSom Vertex Fest\HR-Automation-Agents\BPF2026_IdeaSubmission_PitchDeck_PulseHR.pdf"

$pres = $pp.Presentations.Open($inputPath, [Microsoft.Office.Core.MsoTriState]::msoTrue, [Microsoft.Office.Core.MsoTriState]::msoFalse, [Microsoft.Office.Core.MsoTriState]::msoFalse)
$pres.SaveAs($outputPath, 32)
$pres.SaveAs($outputPathLocal, 32)
$pres.Close()
$pp.Quit()

Write-Host "PDF Exported Successfully!"
Write-Host "Downloads: " (Test-Path $outputPath)
Write-Host "Workspace: " (Test-Path $outputPathLocal)
