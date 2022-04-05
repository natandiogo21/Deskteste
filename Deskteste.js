
 * Gera números primos a partir de um limite superior estabelecido.
 *
 */
#include <stdio.h>
#include <stdlib.h>
 
int main() {
    int n, nMax, i, j, totalDivisores;
 
    // Recebe o limite para exibição dos números primos
    printf("Digite o limite superior para os numeros primos(Minimo 2): ");
    scanf("%d", &nMax);
 
    // Verifica se o limite superior é um número válido
    // O menor número primo é 2
    while(nMax < 2) {
        system("cls");
        printf("Digite o limite superior para os numeros primos(Minimo 2): ");
        scanf("%d", &nMax);
    }
 
    // Verifica se o número é primo e imprime o valor na tela
    for(i = 0; i <= nMax; i++) {
        totalDivisores = 0;
        // Conta os divisores para verificar se o valor é primo
        for(j = 1; j <= i; j++) {
            if(i % j == 0) {
                totalDivisores++;
            }
        }
        // Se o total de divisores é dois, imprime o primo com formatação de 4 casas
        if(totalDivisores == 2) {
            printf("%4d ", i);
        }
    }
 
    printf("\n");
    system("pause");
    return 0;
}program Bubble;
uses crt;
 
var
   v: array [1..10] of integer;
   I: integer;
 
// Procedimento para ordenação utilizando o método bolha
procedure bubble_sort();
var
   I, J, troca: integer;
begin
     for I := 1 to 10 do
     begin
          for J := I+1 to 10 do
          begin
               if v[J] < v[I] then
               begin
                    troca := v[I];
                    v[I] := v[J];
                    v[J] := troca;
               end;
          end;
     end;
end;
 
begin
     // Lê 10 valores
     for I := 1 to 10 do
     begin
          write('Digite um valor: ');
          read(v[I]);
     end;
 
     // Ordenação
     bubble_sort();
 
     // Impressão dos valores.
     writeln('');
     writeln('* Resultado *');
     for I := 1 to 10 do
     begin
          writeln('Valor ', I, ': ', v[I]);
     end;
     readkey;
end.