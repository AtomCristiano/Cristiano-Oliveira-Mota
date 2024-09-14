import { Router, Request, Response } from "express";

interface Resource {
    id: number;
    name: string;
    description: string;
}

let resources: Resource[] = [];
let currentId = 1;

const router = Router();

// Create a new resource
router.post("/", (req: Request, res: Response) => {
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json({ error: "Name and description are required" });
    }

    const newResource: Resource = { id: currentId++, name, description };
    resources.push(newResource);
    return res.status(201).json(newResource);
});

// List resources with optional filters (basic filtering by name)
router.get("/", (req: Request, res: Response) => {
    const { name } = req.query;

    let filteredResources = resources;
    if (name) {
        filteredResources = resources.filter(resource =>
            resource.name.toLowerCase().includes((name as string).toLowerCase())
        );
    }

    return res.json(filteredResources);
});

// Get details of a specific resource by id
router.get("/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const resource = resources.find(r => r.id === parseInt(id));

    if (!resource) {
        return res.status(404).json({ error: "Resource not found" });
    }

    return res.json(resource);
});

// Update resource details
router.put("/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description } = req.body;

    const resource = resources.find(r => r.id === parseInt(id));
    if (!resource) {
        return res.status(404).json({ error: "Resource not found" });
    }

    if (name) resource.name = name;
    if (description) resource.description = description;

    return res.json(resource);
});

// Delete a resource by id
router.delete("/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const resourceIndex = resources.findIndex(r => r.id === parseInt(id));

    if (resourceIndex === -1) {
        return res.status(404).json({ error: "Resource not found" });
    }

    resources.splice(resourceIndex, 1);
    return res.status(204).send();
});

export default router;
