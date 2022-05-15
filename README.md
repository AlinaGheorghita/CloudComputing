# CloudComputing

Aplicatia realizata este destinata celor care doresc sa caute filme si informatii despre acestea.

In cele doua input-uri se introduc datele (filmul pe care doriti sa il cautati si numele) si apoi se apasa butonul search.


In partea dreapta vor aparea rezultatele (daca acestea exista). Rezultatele sunt generate cu ajutorul api-ului de la the movies database (https://developers.themoviedb.org/3/getting-started/introduction).


In partea stanga este o lista cu toate cautarile realizate de alte persoane care se salveaza in baza de date.


Daca filmul cautat nu exista in lista atunci puteti apasa pe butonul "Didn't find your movie?" si sa completati formularul aferent cu datele dumneavoastra.


Toate campurile formularului trebuie verificate, altfel nu poate fi trimis email-ul. Dupa finalizare apasati pe butonul Send message.


In urma acestui proces eu voi primi un email cu datele completate de dumneavoastra in vederea adaugarii filmului.
Pentru trimiterea mail-urilor am folosit nodemailer si ethereal email, este implimentanta si slolutia pentru sendgrid insa contul a fost suspendat pentru verificarea datelor mele, iar acest proces nu a fost finalizat.