class Subassembly:
    def __init__(self,id,name):
        self.id = id
        self.name = name
        self.price = 0.0
        self.parts = []
    
    def __str__(self):
        str_id = str(self.id).zfill(3)
        return f"{str_id} ({self.name})"

    def add_part(self, part):
        part.set_parent(self)
        self.parts.append(part)

    def get_cost(self):
        cost = 0
        for part in self.parts:
            cost += part.get_cost()
        return cost
    
    