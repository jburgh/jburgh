# Ghost Blog - Production Setup

## Architecture

- **Main site**: `jillshaheen.com` - GitHub Pages (static)
- **Ghost blog**: `blog.jillshaheen.com` - DigitalOcean droplet
- **Redirects**: Old `/blog/*.html` URLs redirect to Ghost via HTML meta refresh

## Production Details

| Item | Value |
|------|-------|
| Server | DigitalOcean Ghost Droplet |
| IP | `64.225.10.242` |
| Blog URL | https://blog.jillshaheen.com |
| Admin URL | https://blog.jillshaheen.com/ghost |
| Ghost Version | 5.88.2 |

## Accessing the Server

```bash
ssh root@64.225.10.242
```

To run Ghost CLI commands:
```bash
sudo -i -u ghost-mgr
cd /var/www/ghost
ghost <command>
```

Useful commands:
- `ghost status` - Check if Ghost is running
- `ghost restart` - Restart Ghost
- `ghost update` - Update to latest Ghost version
- `ghost log` - View Ghost logs

## Redirect Map

Old static blog URLs redirect to Ghost:

| Old URL | Redirects To |
|---------|--------------|
| `/blog/index.html` | `https://blog.jillshaheen.com/` |
| `/blog/git-gotchas.html` | `https://blog.jillshaheen.com/git-gotchas/` |
| `/blog/git-transitioning-to-docs-as-code.html` | `https://blog.jillshaheen.com/git-transitioning-to-docs-as-code/` |
| `/blog/git-hygiene.html` | `https://blog.jillshaheen.com/git-hygiene/` |
| `/blog/dashboard-app.html` | `https://blog.jillshaheen.com/dashboard-app/` |
| `/blog/your-portfolio-is-pigeonholing-you.html` | `https://blog.jillshaheen.com/your-portfolio-is-pigeonholing-you/` |
| `/blog/content-tools-careers.html` | `https://blog.jillshaheen.com/content-tools-careers/` |

## Adding New Posts

1. Log in at https://blog.jillshaheen.com/ghost
2. Create new post
3. Set the slug in post settings (gear icon → Post URL)

No changes needed to the main site - Ghost handles everything.

## Maintenance

### Updating Ghost
```bash
ssh root@64.225.10.242
sudo -i -u jilladmin
cd /var/www/ghost
ghost update
```

### Backups
Ghost on DigitalOcean includes automatic weekly backups. For manual export:
- Admin → Settings → Advanced → Labs → Export

### SSL Certificate
Auto-renews via Let's Encrypt. If issues arise:
```bash
cd /var/www/ghost
ghost setup ssl
```

## DNS Configuration

```
blog.jillshaheen.com  A  64.225.10.242
```

---

For Ghost documentation: https://ghost.org/docs/
