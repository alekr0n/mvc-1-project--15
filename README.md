<h1 align="center">System organizacji imprez i wydarzeń</h1> 

### Spis treści:

- Główna strona (http://localhost:3000/): zawiera listę wszystkich imprez i wydarzeń.
- Strona dodawania wydarzeń (http://localhost:3000/add-event): strona z formą do wypełnienia dla dodawania imprez lub wydarzeń.
- Strona edytowania wydarzeń (http://localhost:3000/update-event/id-wydarzenia): strona z wypełnioną formą, ale z możliwością edytowania i zachowania danych.

### Lista zaimpletowanych funkcjonalności:

- Dodawanie nowych wydarzeń i imprez (przycisk "Add event"):
  - Nazwa.
  - Data rozpoczęcia.
  - Data zakończenia.
  - Lista gości.
  - Możliwość dodawania gościów i usuwania (przycisk "Add guest" i "Remove").
  - Możliwość zwrócić się do głównej strony bez dodawania wydarzenia lub imprezy (przycisk "Cancel").
- Edytowanie istniejących wydarzeń i imprez (przycisk "Edit"):
  - Nazwa.
  - Data rozpoczęcia.
  - Data zakończenia.
  - Lista gości.
  - Możliwość dodawania gościów i usuwania (przycisk "Add guest" i "Remove").
  - Możliwość zwrócić się do głównej strony bez zachowania zedytowanego wydarzenia lub imprezy (przycisk "Cancel").
- Usunieńcie istniejących wydarzeń i imprez (przycisk "Delete").

### Instrukcja obsługi

1. Zainstaluj cały repazitorium.
2. Otwórz go w [Vizual Studio Code](https://code.visualstudio.com/).
3. Otwórz terminal lub consol i upewnij się że jesteś w folderze zainstalowanego repazitoriuma. (Powinno to wyglądać naprzykład tak: PS D:\Documents\mvc-1-project-15>)
4. Wpisz do terminalu: node app.js.
5. Za chwilę napisze ci że server jest uruchomiany z portem 3000.
6. Wejdz do przęglądarki i wpisz: "http://localhost:3000/" albo "localhost:3000".
