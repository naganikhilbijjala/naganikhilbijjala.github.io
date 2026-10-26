import {makeRouteHandler} from "@keystatic/next/route-handler";
import config from "../../../../../keystatic.config";

export const dynamic = "force-dynamic";

// Created on first request, not at import time, so builds succeed before the
// GitHub App keys have been added to the environment.
let handler: ReturnType<typeof makeRouteHandler> | undefined;
const getHandler = () => (handler ??= makeRouteHandler({config}));

export const GET = (req: Request) => getHandler().GET(req);
export const POST = (req: Request) => getHandler().POST(req);
