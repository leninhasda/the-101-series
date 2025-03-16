class Walker {
  int x;
  int y;
  int s;
  
  Walker() {
    x = width / 2;
    y = height / 2;
  }
  
  void step() {
    int choice = int( random(4) );
    s = int( random( 256 ) );
    
    if( choice == 0 ) {
       x++;
    }
    else if ( choice == 1 ) {
      x--;
    }
    else if ( choice == 2 ) {
      y++;
    }
    else {
      y--;
    }
  }
  
  void display() {
    stroke(s);
    point(x,y);
  }
}

Walker w;

void setup() {
  size(640, 360);
  w = new Walker();
  background(255);
}

void draw() {
 w.step();
 w.display();
}