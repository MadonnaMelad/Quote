

function getQuote(){
var quotes =['“God will not look you over for medals, degrees or diplomas but for scars.”',
  '“The function of prayer is not to influence God, but rather to change the nature of the one who prays.”',
  '“You must not lose faith in humanity. Humanity is like an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.”',
  '“Life is not about finding yourself. Life is about creating yourself.”',
  '“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”',
  '“In three words I can sum up everything I have learned about life: it goes on.”',
  '“Insanity is doing the same thing, over and over again, but expecting different results.”',
  '“It is better to be hated for what you are than to be loved for what you are not.”',
  '“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”',
  '“Life is what happens to us while we are making other plans.”']
var quoteAuthor =['― Elbert Hubbard','― Soren Kierkegaard','― Mahatma Gandhi','― George Bernard Shaw','― Helen Keller','― Robert Frost','― Narcotics Anonymous','― Andre Gide, Autumn Leaves','― Albert Einstein','― Allen Saunders']


  var x = Math.floor(Math.random()*quotes.length)

  document.getElementById('demo').innerHTML=quotes[x]
  document.getElementById('demoo').innerHTML=quoteAuthor[x]
}