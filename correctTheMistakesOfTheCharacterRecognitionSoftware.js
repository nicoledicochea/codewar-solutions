// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.


/*
P: a string
R: a corrected string
  5 => S
  0 => O
  1 => I
E:  correct("L0ND0N"),"LONDON"
    correct("DUBL1N"),"DUBLIN"
    correct("51NGAP0RE"),"SINGAPORE"
    correct("BUDAPE5T"),"BUDAPEST"
    correct("PAR15"),"PARIS"
P: split string
map
conditional
if specific #, return corrected letter
join string
*/

function correct(string){
	return string
    .split('')
    .map(element => {
      switch(element) {
          case '5':
            return 'S'
          case '0':
            return 'O'
          case '1':
            return 'I'
          default:
            return element
      }
    }).join('')
}