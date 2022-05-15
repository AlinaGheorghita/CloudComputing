# CloudComputing


Prezentare aplicație: https://youtu.be/VLQTS_fYLnk

Introducerea și descrierea problemei

Scopul proiectului este crearea unei aplicații web care sa utilizeze servicii de Cloud. Pentru acesta am realizat o aplicație ce poate fi utilizată pentru a caută filme Folosind o baza de date a filmelor online. Aplicatia este destinata tuturor persoanelor fara limita de varsta. Aceasta poate fi folosita atunci cand vreti sa cautati un fim pentru a afala mai multe informatii despre acesta sau cand nu iti amintesti numele complet al unui film si astefl vor fi afisate toate filmele disponibile ce contin cautarea dumneavoastra.

![image](https://user-images.githubusercontent.com/68016517/168489037-92b68596-e1e6-4b8b-ac7f-1e016c875bc7.png)
 
In cele doua input-uri se introduc datele (filmul pe care doriti sa il cautati si numele) si apoi se apasa butonul search. Butonul de search poate fi completat doar după ce campurile au fost completate.
In partea dreapta vor aparea rezultatele (daca acestea exista). Rezultatele sunt generate cu ajutorul api-ului de la the movies database (https://developers.themoviedb.org/3/getting-started/introduction).
In partea stanga este o lista cu toate cautarile realizate de alte persoane care se salveaza in baza de date.
Daca filmul cautat nu exista in lista atunci puteti apasa pe butonul "Didn't find your movie?" si sa completati formularul aferent cu datele dumneavoastra.
Toate campurile formularului trebuie verificate, altfel nu poate fi trimis email-ul. Dupa finalizare apasati pe butonul Send message.
In urma acestui proces eu voi primi un email cu datele completate de dumneavoastra in vederea adaugarii filmului. Pentru trimiterea mail-urilor am folosit nodemailer si ethereal email, este implimentanta si slolutia pentru sendgrid insa contul a fost suspendat pentru verificarea datelor mele, iar acest proces nu a fost finalizat.

Descriere Api

Api-ul folosit pentru a accesa baza de date a celor de la the movies database (https://developers.themoviedb.org/3/getting-started/introduction) are următoarea structura:

https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}

Prin query este transmis parametrul introdus de user in input și răspunsul primit de la acesta este o lista cu toate filmele care conțin cuvântul introdus.

Api ul apelat pentru transmiterea mail-urilor necesita informații despre persoana care transmite email ul și cea care îl primește, subiectul este definit sub forma “User sent you a message” si mesajul care ar trebui sa contina informatii cu privire la un posibil film cautat in baza de date si nu a existat sau poate fi folosit pentru a sugera imbunatariri.
Pentru folosirea serviciilor nodemailer si ethereal email a fost creat un cont pentru care am primit un username corespunzator email-ului unde voi primi mesajele. Acesta este: reina.senger93@ethereal.email.

Flux de date
Metode HTTP definite: GET(preluare date din baza de date mySQL pentru afisarea cautarilor dar si pentru preluarea filmelor), POST (pentru adaugarea noilor cautari in baza de date), DELETE (pentru stergerea datelor din baza de date).



Exemplu: apasarea butonului de search determinea apelarea a 3 request-uri:
1.	Apelarea api-ului themoviesbd pentru afisarea filmelor care se potrivesc cu cautarea
 
 ![image](https://user-images.githubusercontent.com/68016517/168491869-377d0856-1eaf-41bf-ba8e-40fab565d153.png)

2.	Salavarea in baza de date a username-ului, numele filmului si data cautarii

![image](https://user-images.githubusercontent.com/68016517/168491864-8639171f-b690-4328-9932-6591e98bdef3.png)

 
3.	Updatarea listei cu ultimele cautari prin apelarea unei metode get pentru preluarea din baza de date a tuturor cautarilor salvate.

 
![image](https://user-images.githubusercontent.com/68016517/168491859-7e0be9d6-d845-40cb-8cb9-2ce8983fd03c.png)





Capturi de ecran

Cautare
 
 ![image](https://user-images.githubusercontent.com/68016517/168489037-92b68596-e1e6-4b8b-ac7f-1e016c875bc7.png)

Validari

![image](https://user-images.githubusercontent.com/68016517/168489062-94b21d54-8429-46d5-89d7-e48907aeb363.png)

Formular completat

![image](https://user-images.githubusercontent.com/68016517/168489067-0480a956-92c9-4047-9808-28baa68d5db9.png)

Mail-ul primit

![image](https://user-images.githubusercontent.com/68016517/168489077-0818b46e-0afd-459c-ad0e-d3760f5b705f.png)

 




