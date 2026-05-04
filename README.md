# Moment 4 - Angular med TypeScript och Signal

## [Render - Moment 4](https://moment4-typescript-signal.onrender.com/home)

Denna webbplats består av en Home, dvs index, sida.
Den hämtar in data från [MIUN Ramschema](https://webbutveckling.miun.se/files/ramschema.json) och skriver sedan ut det på webbplatsen.
Signal används för att invänta ändringar, så som arrayen courses eller en sträng för errors, i fall något går fel.
HttpClient används för att göra, i detta fall, READ från urlen ovan.

En separat service, courseService, sköter själva fetchen med en funktion, fetchCourses() som inväntar en promise och returnerar den sedan med firstValueFrom.

En separat mapp tillhandahåller ett interface, Course, som används för strukturen av den data som hämtas in med HTTPClient.
