#!/usr/bin/env python3
import json
import re
from datetime import datetime
from pathlib import Path

IN_FILE = Path('/Users/admin/Downloads/job-tracker-backup-2026-01-08.json')
BACKUP = IN_FILE.with_suffix('.backup.json')

# Common ISO-like formats to try
FORMATS = [
    '%Y-%m-%dT%H:%M:%S.%fZ',
    '%Y-%m-%dT%H:%M:%S.%f',
    '%Y-%m-%dT%H:%M:%SZ',
    '%Y-%m-%dT%H:%M:%S',
    '%Y-%m-%d %H:%M:%S',
]

ISO_DATE_RE = re.compile(r'^\d{4}-\d{2}-\d{2}(?:[T ].*)?$')

changed = 0


def parse_and_format(s: str):
    global changed
    if not isinstance(s, str):
        return s
    s = s.strip()
    # Already YYYY-MM-DD
    if re.fullmatch(r"\d{4}-\d{2}-\d{2}", s):
        return s
    # Try known ISO formats
    for fmt in FORMATS:
        try:
            dt = datetime.strptime(s, fmt)
            new = dt.strftime('%Y-%m-%d')
            if new != s:
                changed += 1
            return new
        except Exception:
            continue
    # Try parsing if it starts with YYYY-MM-DDT or YYYY-MM-DD
    if ISO_DATE_RE.match(s):
        # Attempt to extract leading date
        m = re.match(r'^(\d{4}-\d{2}-\d{2})', s)
        if m:
            new = m.group(1)
            if new != s:
                changed += 1
            return new
    return s


def walk(obj):
    if isinstance(obj, dict):
        for k, v in obj.items():
            obj[k] = walk(v)
        return obj
    elif isinstance(obj, list):
        return [walk(x) for x in obj]
    elif isinstance(obj, str):
        return parse_and_format(obj)
    else:
        return obj


if not IN_FILE.exists():
    print('Input file not found:', IN_FILE)
    raise SystemExit(1)

# Backup
if not BACKUP.exists():
    IN_FILE.replace(BACKUP)
    # restore original to proceed (we copied by move above), so copy back
    BACKUP.replace(IN_FILE)

with IN_FILE.open('r', encoding='utf-8') as f:
    data = json.load(f)

changed = 0
new_data = walk(data)

if changed:
    with IN_FILE.open('w', encoding='utf-8') as f:
        json.dump(new_data, f, indent=2, ensure_ascii=False)

print(f'Normalized dates. Values changed: {changed}. Backup at: {BACKUP}')
