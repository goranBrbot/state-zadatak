# Potrebno napraviti React aplikaciju koja će imati sljedeće

1. U vježbi je potrebno napraviti četiri komponente u četiri odvojene datoteke.
Komponenta App i još jedna komponenta moraju biti definirane klasom, a dvije komponente je potrebno definirati funkcijom.
2. Komponenta App mora biti parent komponenta ostalima i mora sadržavati polje "korisnici" koje unutar sebe sadrži tri objekta s imenima i godinama korisnika.
3. Komponenta App mora pozivati ostale komponente i u pozivu preko props-a im treba proslijediti ime i godine korisnika, jednu komponentu je potrebno pozvati s "children" propsima.
4. Komponenta definirana funkcijom treba prikazati ime i godine korisnika.
5. Komponenta definirana klasom treba prikazati ime i godine korisnika.
6. Druga komponenta definirana funkcijom treba prikazati ime i godine korisnika, te treba ispisati proslijeđene children propse.

## Početno stanje aplikacije je završno stanje aplikacije iz prethodne vježbe

1. U vježbi je potrebno definirati polje korisnici iz prethodne vježbe unutar stanja (statea) komponente App
2. Unutar stanja (statea) komponente App pored polja korisnici potrebno je definirati proizvoljnu tekstualnu varijablu
3. Prikazati na ekranu vrijednosti iz stanja (statea), a proizvoljnu vrijednost prikazati preko children propsa.
4. Potrebno je dodati button
5. Pritiskom na button potrebno je promijeniti godine korisnika
6. Prikazati promjenu na ekranu
7. Komponenta App smije biti jedina komponenta sa stanjima (statefull), komponenta App mora biti definirana klasom
