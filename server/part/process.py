class ProcessMultiplier:
    def __init__(self, multiplier):
        self.multiplier = multiplier

    def __call__(self, data):
        return data * self.multiplier
    
class Process:
    def __init__ (self,title,measure_unit, unit_cost, process_multiplier,description,qty = 1,tooling_required = True):
        self.title = title
        self.measure_unit = measure_unit
        self.tooling_required = tooling_required
        self.unit_cost = unit_cost
        self.process_multiplier = process_multiplier
        self.description = description
        self.qty = qty
    
    def get_cost(self):
        return self.unit_cost * self.process_multiplier(self.qty)