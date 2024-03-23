class Residence {
    name = "";
    address = "";
    rent = "";
    isAvailable = true;

}

class Condo extends Residence {
    roomNumber = "";
    hasFitness = true;
    hasPool = true ;
}

class TownHouse extends Residence {
    floor = 0;
}

class House extends Residence {
   area = 0;
}
