import type { APIRoute } from 'astro'
import { bankOf } from '../content/practice/bank'

export const GET: APIRoute = () => Response.json(bankOf('en-US'))
