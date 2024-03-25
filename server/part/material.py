class Material:
    def __init__(self, title, size_1_label, size_2_label, size_1_unit, size_2_unit, description, cost_formula, C1, C2):
        self.title = title
        self.size_1_label = size_1_label
        self.size_2_label = size_2_label
        self.size_1_unit = size_1_unit
        self.size_2_unit = size_2_unit
        self.description = description
        self.cost_formula = cost_formula
        self.C1 = C1
        self.C2 = C2
        self.cost = 0.0

    def get_cost(self):
        C1 = self.C1
        C2 = self.C2
        if self.cost_formula:
            self.cost = eval(self.cost_formula)
        return self.cost