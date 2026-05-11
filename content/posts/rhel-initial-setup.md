---
title: "RHEL8/9を本番に入れる前に必ずやる初期設定10項目"
date: "2026-05-01"
excerpt: "RHELを本番環境に投入する前に確認するチェックリスト。設計現場で実際に使っている手順をまとめた。"
tags: ["インフラ", "RHEL", "Linux", "サーバー構築"]
---

## 初期設定を省くと後で必ず困る

サーバーを構築するとき、「とりあえず動けばいい」で進めてしまう現場をよく見る。

初期設定を省いた結果：
- 監査ログが取れていなかった
- タイムゾーンがUTCのままでログの突き合わせが大変だった
- SELinuxを無効にしたままにして後で指摘された

初期設定は地味だが、あとで修正するコストが高い。最初にやりきるのが一番安い。

ここでは自分が本番投入前に必ず確認する10項目を書く。

---

## 1. OSバージョン・カーネルバージョンの確認

```bash
cat /etc/redhat-release
uname -r
```

設計書と一致しているか確認する。マイナーバージョンが違うだけで対応が変わることがある。

---

## 2. ホスト名の設定

```bash
hostnamectl set-hostname <ホスト名>
hostname
```

ホスト名は設計書通りに設定する。変更後は再ログインするか `bash` を再起動すると反映される。

---

## 3. タイムゾーンの設定

```bash
timedatectl set-timezone Asia/Tokyo
timedatectl status
```

デフォルトがUTCになっている場合が多い。本番環境ではJST（Asia/Tokyo）に設定する。

タイムゾーンが合っていないと、ログの時刻が9時間ずれて障害調査が大変になる。

---

## 4. NTP（時刻同期）の設定

```bash
# chronydのステータス確認
systemctl status chronyd

# 同期状況確認
chronyc sources -v
```

社内NTPサーバーがある場合は `/etc/chrony.conf` を編集してサーバーを指定する。

```bash
# /etc/chrony.conf の編集
server <NTPサーバーIP> iburst
```

設定後は `systemctl restart chronyd` で反映。

---

## 5. SELinuxの確認

```bash
getenforce
sestatus
```

本番環境では `Enforcing` が原則だ。無効（`Disabled`）や許可（`Permissive`）になっている場合は、設計根拠を確認してから判断する。

SELinuxの設定変更は `/etc/selinux/config` で行う。変更を反映するには再起動が必要。

---

## 6. firewalldの確認

```bash
systemctl status firewalld
firewall-cmd --list-all
```

必要なポートだけ開放されているか確認する。不要なサービスのポートが開いていないかチェックする。

---

## 7. SSHの設定

`/etc/ssh/sshd_config` の主な確認ポイント：

```bash
# root直接ログイン禁止
PermitRootLogin no

# パスワード認証の許否（鍵認証のみの場合）
PasswordAuthentication no

# 接続タイムアウト
ClientAliveInterval 300
ClientAliveCountMax 3
```

変更後は `systemctl restart sshd` で反映。

---

## 8. ログの設定確認

```bash
systemctl status rsyslog
ls -la /var/log/
```

`/var/log/messages`、`/var/log/secure`、`/var/log/cron` が生成されているか確認する。

ログローテーションの設定も確認：

```bash
cat /etc/logrotate.d/syslog
```

---

## 9. ディスク使用量と空き容量の確認

```bash
df -hT
lsblk
```

`/`（ルート）・`/var`・`/tmp` のディスク割り当てが設計通りか確認する。特に `/var` はログが溜まりやすいため、余裕を持たせているか確認。

---

## 10. パッケージの更新確認

```bash
yum check-update
```

本番投入前に適用すべきセキュリティパッチがあるか確認する。適用するかどうかは顧客・プロジェクト方針に従う。

---

## チェックリストとして使う

実際の作業では以下の流れで使っている：

```
□ OSバージョン確認（設計書と一致）
□ ホスト名設定（設計書通り）
□ タイムゾーン設定（JST）
□ NTP同期確認（社内NTPサーバーに接続）
□ SELinux状態確認（原則Enforcing）
□ firewalld確認（必要ポートのみ開放）
□ SSH設定確認（rootログイン禁止等）
□ ログ生成確認（/var/log/messages等）
□ ディスク使用量確認（設計通り）
□ パッケージ更新確認（セキュリティパッチ）
```

---

## RHEL7からRHEL8/9への変更点

RHEL7から移行する際に注意が必要な変更点：

**ネットワーク設定**
- `ifconfig` は廃止 → `ip` コマンドを使う
- ネットワーク設定ファイルの場所が変わった

**パッケージ管理**
- `yum` は `dnf` のエイリアスになった
- モジュールストリームの概念が追加された

**サービス管理**
- `chkconfig` は廃止 → `systemctl` を使う

---

## まとめ

RHEL本番投入前の初期設定10項目：

1. OSバージョン・カーネルバージョンの確認
2. ホスト名の設定
3. タイムゾーンの設定（Asia/Tokyo）
4. NTP時刻同期の設定
5. SELinuxの確認（原則Enforcing）
6. firewalldの確認
7. SSH設定の確認（rootログイン禁止等）
8. ログの設定確認
9. ディスク使用量の確認
10. パッケージ更新確認

初期設定は地味だが、省くと後で必ず困る。最初にやりきる。
