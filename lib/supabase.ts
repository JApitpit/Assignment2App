import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://sbwczrrduwqhehkgpmxn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNid2N6cnJkdXdxaGVoa2dwbXhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4ODcyNTEsImV4cCI6MjA1ODQ2MzI1MX0.XieFcgxvuwcHSpNMGegZZZWsviF2J9euwq4GV6n7VA0';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
