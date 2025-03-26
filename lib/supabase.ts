import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://nnqqfxcveilukqdrwxob.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ucXFmeGN2ZWlsdWtxZHJ3eG9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5NTE2MTQsImV4cCI6MjA1ODUyNzYxNH0.EJABGCHdYTtPUMywdTQEkRx-vigxHAhaCOiY3K1fP9I';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
