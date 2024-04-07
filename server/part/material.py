class Material:
    def __init__(self, title, catergory ,unit_1, unit_2, size_1, size_2, C1, C2, formula, cost = None, desc =''):
        self.title = title
        self.catergory = catergory
        self.unit_1 = unit_1
        self.unit_2 = unit_2
        self.size_1 = size_1
        self.size_2 = size_2
        self.description = desc
        self.formula = formula
        self.C1 = C1
        self.C2 = C2
        self.cost = cost

    def get_cost(self):
        if not self.cost:
            return self.cost
        
        C1 = self.C1
        C2 = self.C2
        if self.formula:
            self.cost = eval(self.formula)
        return self.cost