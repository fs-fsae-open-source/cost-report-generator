from material import Material

class Fastener(Material):
    def __init__(self, title, size_1_label, size_2_label, size_1_unit, size_2_unit, description, cost_formula, C1, C2):
        super().__init__(title, size_1_label, size_2_label, size_1_unit, size_2_unit, description, cost_formula, C1, C2)
