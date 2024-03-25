class Part:
    def __init__(self, id, name, rev = "AA", parent = None):
        self.id = id
        self.name = name
        self.price = 0.0
        self.rev = "AA"
        self.materials = []
        self.processes = []
        self.tools = []
        self.fasteners = []
        self.drawing = None
        self.parent = parent

    def __str__(self):
        str_id = str(self.id).zfill(3)
        return f"{self.parent}{str_id} ({self.name}) - {self.rev}"
    
    def set_parent(self, parent):
        self.parent = parent
    
    def add_material(self, material):
        self.materials.append(material)

    def add_process(self, process):
        self.processes.append(process)
    
    def add_tool(self, tool):
        self.tools.append(tool)
    
    def add_fastener(self, fastener):
        self.fasteners.append(fastener)

    def get_cost(self):
        cost = 0
        for material in self.materials:
            cost += material.get_cost()
        for process in self.processes:
            cost += process.get_cost()
        for tool in self.tools:
            cost += tool.get_cost()
        for fastener in self.fasteners:
            cost += fastener.get_cost()
        return cost
    